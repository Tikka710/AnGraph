import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentDate'
})

// カスタムパイプ
export class CommentDatePipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    const format = args[0] || 'yyyy/MM/dd HH:mm'
    return formatDate(value, format, 'en-Us');
  }

}
