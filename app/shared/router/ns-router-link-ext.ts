import {Input, HostListener, Directive} from '@angular/core';
import {UrlTree, ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {routerLog} from 'nativescript-angular/trace';
import {TimerWrapper} from '@angular/core/src/facade/async';

@Directive({
    selector: '[nsRouterLink]'
})
export class NSRouterLinkExt {
    private commands:any[] = [];
    @Input() target:string;
    @Input() queryParams:{ [k:string]:any };
    @Input() fragment:string;
    @Input() nsRouterLinkDrawer: any;

    urlTree:UrlTree;

    /**
     * @internal
     */
    constructor(private router:Router, private route:ActivatedRoute) {
    }

    @Input("nsRouterLink")
    set params(data:any[] | string) {
        if (Array.isArray(data)) {
            this.commands = data;
        } else {
            this.commands = [data];
        }
    }

    ngOnChanges(changes:{}):any {
        this.updateTargetUrl();
    }

    @HostListener("tap")
    onTap() {
        let drawerOpen = false;
        if (this.nsRouterLinkDrawer) {
            drawerOpen = this.nsRouterLinkDrawer.sideDrawer.getIsOpen();
            this.nsRouterLinkDrawer.sideDrawer.closeDrawer();
        }
        routerLog("nsRouterLink.tapped: " + this.commands);
        TimerWrapper.setTimeout(() =>{
            this.router.navigate(
                this.commands,
                {relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment});
        }, drawerOpen ? 320 : 20);
    }

    private updateTargetUrl():void {
        this.urlTree = this.router.createUrlTree(
            this.commands,
            {relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment});
    }
}
