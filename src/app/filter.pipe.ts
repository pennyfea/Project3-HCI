import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'libraryFilter'})
export class libraryFilterPipe implements PipeTransform{
  transform(items: any[], criteria: string): any{
    if(criteria == 'all') {return items}
     else
    return items.filter(item => {
      return item.catergory ===  criteria;
    });
  }
}
