import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../auth-code-flow.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sfoauth';

  constructor(private router: Router, private oauthService: OAuthService, private http: HttpClient) {

  }


  public async call() {
    console.log('a')
    window.location.href = "https://login.salesforce.com/services/oauth2/authorize?https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9t0sl2P.pByoV2gynx54gVDICDlEnyeHjAzkRkLscEhn8Bz_v0IstnCHKFdzDrffncznwwTtKj6irmGeA&state=xcoiv98y2kd22vusuye3kch&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F";
    // let ans;
    // this.http.get("https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9t0sl2P.pByoV2gynx54gVDICDlEnyeHjAzkRkLscEhn8Bz_v0IstnCHKFdzDrffncznwwTtKj6irmGeA&state=xcoiv98y2kd22vusuye3kch&scope=create+delete&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin")
    //   .subscribe(a => ans = a);
    // console.log(ans)
  }
}
