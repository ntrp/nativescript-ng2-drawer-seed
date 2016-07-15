import {Type} from '@angular/core/src/facade/lang';
import {NSRouterLinkExt} from './ns-router-link-ext';
import {NSRouterLinkActive} from './ns-router-link-active';
import {PageRouterOutlet} from 'nativescript-angular/router/page-router-outlet';

export const NS_ROUTER_DIRECTIVES_EXT: Type[] = [
    NSRouterLinkExt,
    NSRouterLinkActive,
    PageRouterOutlet
]

