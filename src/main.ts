import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app/appRoutes";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
})

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
