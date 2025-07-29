import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import Swiper from 'swiper/bundle';

class SwiperComponent {
    set initialize(value) {
        this.shouldInitialize = this.initialized ? false : value;
    }
    constructor(elementRef, changeDetectorRef) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.slideCount = 0;
        this.initialized = false;
        this.shouldInitialize = true;
    }
    ngAfterViewInit() {
        if (this.shouldInitialize) {
            this.setup();
        }
    }
    setup() {
        if (!this.swiper) {
            // if rendered on server querySelector is undefined
            if (this.elementRef.nativeElement.querySelector) {
                this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
                this.slideCount = this.swiperWrapper.childElementCount;
                this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
                this.changeDetectorRef.detectChanges();
            }
            this.shouldInitialize = false;
        }
    }
    ngAfterViewChecked() {
        if (this.shouldInitialize) {
            this.setup();
        }
        if (this.swiperWrapper &&
            this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.swiper.update();
        }
    }
    ngOnDestroy() {
        this.swiper.destroy(true, true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwiperComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SwiperComponent, selector: "swiper", inputs: { config: "config", initialize: "initialize" }, ngImport: i0, template: "<div\n  [ngClass]=\"{\n    'swiper-container': config?.containerModifierClass === undefined\n  }\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:block}.swiper-container{width:100%;height:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'swiper', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  [ngClass]=\"{\n    'swiper-container': config?.containerModifierClass === undefined\n  }\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:block}.swiper-container{width:100%;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { config: [{
                type: Input
            }], initialize: [{
                type: Input,
                args: ['initialize']
            }] } });

class NgxUsefulSwiperModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUsefulSwiperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxUsefulSwiperModule, declarations: [SwiperComponent], imports: [CommonModule], exports: [SwiperComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUsefulSwiperModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUsefulSwiperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwiperComponent],
                    imports: [CommonModule],
                    exports: [SwiperComponent]
                }]
        }] });

/*
 * Public API Surface of ngx-useful-swiper
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxUsefulSwiperModule, SwiperComponent };
//# sourceMappingURL=ngx-useful-swiper.mjs.map
