import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper/bundle';
import * as i0 from "@angular/core";
export declare class SwiperComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    private elementRef;
    private changeDetectorRef;
    config: SwiperOptions;
    set initialize(value: boolean);
    swiper: Swiper;
    private swiperWrapper;
    private slideCount;
    private initialized;
    private shouldInitialize;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    setup(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwiperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwiperComponent, "swiper", never, { "config": { "alias": "config"; "required": false; }; "initialize": { "alias": "initialize"; "required": false; }; }, {}, never, ["*"], false, never>;
}
