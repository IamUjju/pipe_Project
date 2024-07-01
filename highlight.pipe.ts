import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'highlight'
})export class highlightPipe implements PipeTransform{
    transform(para:string, inputText: string):string {
        if(para.includes(inputText)) {
            para = para.replaceAll(inputText, `<span class="highlighted">${inputText}</span>`)
        }
        return para;
    }
}