import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'projectFilter',
    pure: false,
})
export class ProjectFilterPipe implements PipeTransform {
    frameworkFilter(items: any[], args?: any): any {
        if(args.frameworks == '') {
            return items
        } else {
            return items.filter(item => item.frameworks.includes(args.frameworks));
        }
    }

    languageFilter(items: any[], args?: any): any {
        if(args.languages == '') {
            return items
        } else {
            return items.filter(item => item.languages.includes(args.languages));
        }
    }

    transform(items: any[], args?: any): any {
        if(Object.values(args).every(value => value == '')){
            return items
        } 
        else {
            return this.frameworkFilter(this.languageFilter(items,args),args) 
        }
    }
}