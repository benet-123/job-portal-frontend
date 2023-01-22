import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobfeed:[],searchkey:string,propname:string):any[] {
    const result:any=[]
    if(!jobfeed || searchkey=='' || propname==''){
return jobfeed;
    }


    //searching
    jobfeed.forEach((job:any)=>{
      if(job[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(job)
      }
    })
    return result;
  }

}
