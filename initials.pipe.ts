import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'initials'
})export class initialsPipe implements PipeTransform{
    transform(firstName:string, lastName:string):string {
        if(firstName.length>0 && lastName.length>0)
        return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    else{
        return '';
    }
    }
}