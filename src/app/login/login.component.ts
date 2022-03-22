import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";
import {authCodeFlowConfig} from "../../../auth-code-flow.config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  claims: any;
  constructor(private oauthService: OAuthService, private router: Router) { }

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

    console.log('CLAIMS', this.claims)
    // debugger
    if(this.claims){
      console.log('Login claims', this.claims);
      // this.router.navigateByUrl('/')
    }
    return this.claims ? this.claims : null;
  }

}
