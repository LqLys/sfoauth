import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";
import {authCodeFlowConfig} from "../../../auth-code-flow.config";
import {HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  claims: any;
  constructor(private oauthService: OAuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.configSso();
  }

  configSso(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    console.log('login');
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.initCodeFlow();
  }

  get token(){
    this.claims = this.oauthService.getIdentityClaims();
    console.log('======')
    // console.log(this.oauthService.getAccessToken());
    console.log(this.oauthService.getIdToken());
    console.log('======')
    console.log('CLAIMS', this.claims)
    // debugger
    if(this.claims){
      console.log('Login claims', this.claims);
      // this.router.navigateByUrl('/')
    }
    return this.claims ? this.claims : null;
  }

  test2() {
    const headers = new HttpHeaders()
      .set("Authorization", "Bearer " + this.oauthService.getIdToken());
    this.http.get('http://localhost:8080/test2', {headers})
      .subscribe(a => console.log(a));
  }

  test1() {
    this.http.get('http://localhost:8080/test1  ')
      .subscribe(a => console.log(a));
  }
}
