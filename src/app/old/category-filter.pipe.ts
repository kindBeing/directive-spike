import {Pipe, PipeTransform} from '@angular/core';
import {FunObject} from '../data-source';

@Pipe({
name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(value: FunObject, category: string) {
    return value.type === category;
  }
}

