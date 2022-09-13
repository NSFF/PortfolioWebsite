import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'projectFilter',
    pure: false,
})
export class ProjectFilterPipe implements PipeTransform {
    frameworkFilter(items: any[], args?: any): any {
        if(args.frameworks == '') {
            return items
        }
        else if(args.frameworks == 'Angular') {
            return items.filter(item => item.frameworks.includes('Angular'));
        }
        else if(args.frameworks == 'Laravel') {
            return items.filter(item => item.frameworks.includes('Laravel'));
        }
    }

    languageFilter(items: any[], args?: any): any {
        if(args.languages == '') {
            return items
        }
        else if(args.languages == 'MySQL') {
            return items.filter(item => item.languages.includes('MySQL'));
        }
        else if(args.languages == 'JavaScript/TypeScript') {
            return items.filter(item => item.languages.includes('JavaScript/TypeScript'));
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