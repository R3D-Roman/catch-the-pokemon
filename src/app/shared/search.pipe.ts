import { Pipe, PipeTransform } from '@angular/core';
import { PokemonList } from './interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lists: any[], search: string = ""): PokemonList[] {
    if(!search.trim()) {
      return lists;
    }
    return lists.filter((list) => {
      return list.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
