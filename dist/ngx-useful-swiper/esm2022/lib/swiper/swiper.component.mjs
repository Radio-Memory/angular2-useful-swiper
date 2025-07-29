import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import Swiper from 'swiper/bundle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11c2VmdWwtc3dpcGVyL3NyYy9saWIvc3dpcGVyL3N3aXBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdXNlZnVsLXN3aXBlci9zcmMvbGliL3N3aXBlci9zd2lwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sTUFBeUIsTUFBTSxlQUFlLENBQUM7OztBQVN0RCxNQUFNLE9BQU8sZUFBZTtJQUkxQixJQUF5QixVQUFVLENBQUMsS0FBYztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQVNELFlBQ1UsVUFBc0IsRUFDdEIsaUJBQW9DO1FBRHBDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU50QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBSzdCLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLG1EQUFtRDtZQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzlELGlCQUFpQixDQUNsQixDQUFDO2dCQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUMzRCxJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hDO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFFRCxJQUNFLElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFDeEQ7WUFDQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBN0RVLGVBQWU7bUdBQWYsZUFBZSxzR0NuQjVCLDhJQU9BOzs0RkRZYSxlQUFlO2tCQVAzQixTQUFTOytCQUVFLFFBQVEsbUJBR0QsdUJBQXVCLENBQUMsTUFBTTtpSUFLdEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNtQixVQUFVO3NCQUFsQyxLQUFLO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgU3dpcGVyLCB7IFN3aXBlck9wdGlvbnMgfSBmcm9tICdzd2lwZXIvYnVuZGxlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc3dpcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXBlci5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTd2lwZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvLyBhZGQgYWxsIHRoZSBvcHRpb25zIGFzIG9wdGlvbmFsIHNldHRpbmdzIGFuZCB1c2UgdGhlbSB0byBjcmVhdGUgYW4gb3B0aW9ucyBvYmplY3RcbiAgQElucHV0KCkgY29uZmlnOiBTd2lwZXJPcHRpb25zO1xuICBASW5wdXQoJ2luaXRpYWxpemUnKSBzZXQgaW5pdGlhbGl6ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvdWxkSW5pdGlhbGl6ZSA9IHRoaXMuaW5pdGlhbGl6ZWQgPyBmYWxzZSA6IHZhbHVlO1xuICB9XG5cbiAgc3dpcGVyOiBTd2lwZXI7XG5cbiAgcHJpdmF0ZSBzd2lwZXJXcmFwcGVyOiBhbnk7XG4gIHByaXZhdGUgc2xpZGVDb3VudCA9IDA7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaG91bGRJbml0aWFsaXplID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaG91bGRJbml0aWFsaXplKSB7XG4gICAgICB0aGlzLnNldHVwKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXAoKSB7XG4gICAgaWYgKCF0aGlzLnN3aXBlcikge1xuICAgICAgLy8gaWYgcmVuZGVyZWQgb24gc2VydmVyIHF1ZXJ5U2VsZWN0b3IgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnN3aXBlcldyYXBwZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuc3dpcGVyLXdyYXBwZXInXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMuc3dpcGVyV3JhcHBlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKFxuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3aXBlciA+IGRpdicpLFxuICAgICAgICAgIHRoaXMuY29uZmlnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNob3VsZEluaXRpYWxpemUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkSW5pdGlhbGl6ZSkge1xuICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMuc3dpcGVyV3JhcHBlciAmJlxuICAgICAgdGhpcy5zbGlkZUNvdW50ICE9PSB0aGlzLnN3aXBlcldyYXBwZXIuY2hpbGRFbGVtZW50Q291bnRcbiAgICApIHtcbiAgICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMuc3dpcGVyV3JhcHBlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3dpcGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgW25nQ2xhc3NdPVwie1xuICAgICdzd2lwZXItY29udGFpbmVyJzogY29uZmlnPy5jb250YWluZXJNb2RpZmllckNsYXNzID09PSB1bmRlZmluZWRcbiAgfVwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19