import { Component, OnInit } from '@angular/core';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from './grid'
import {Search} from './grid'
import {SearchGif} from './grid'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  url: string;
  searchterm: Search[]=[]
  gifs: Gif[] = []
  urlssearchs:SearchGif[]=[]

  newSearch = new Search("")
 
  ngOnInit(): void {

    this.getTrending()

  }

  getTrending() {
    const gf = new GiphyFetch('kp565aEitjQhd24gmHi5vTqIwxWB81iU')
    async function getgif() {
      let data = await gf.trending({ limit: 6, offset: 25 });
      let urlarray = [];
      
      for (let i = 0; i < 6; i++) {
        let gifurls = data.data[i].images.downsized_large.url
        urlarray.push(gifurls)
      }
      return urlarray
    }
    getgif().then((val) => {
      for (let i = 0; i < 6; i++) {
        this.gifs.push(new Gif(val[i]))
      }
    })
  }
  getsearch() {
    const gf = new GiphyFetch('kp565aEitjQhd24gmHi5vTqIwxWB81iU')
    let search = this.newSearch.searchparam
    async function getsearchgif() {
      let searchArray = []
      const result = await gf.search( search, { sort: "recent", limit: 6 });
      for(let i = 0;i<result.data.length;i++){
        searchArray.push(result.data[i].images.downsized_large.url)
      }
      return searchArray
    }
    getsearchgif().then((val)=> {
      for (let i = 0; i < 6; i++) {
        this.urlssearchs.push(new SearchGif(val[i]))
      }
    })
  }


}



//    getGifs(){
// //     //creates a giphyfetch with the specified api Key


//   }
// //fetchgifs function that takes an offset
// //allows the grid to paginate as the user scrolls
// const fetchGifs = (offset: number) => {
//   //you can choose whatever endpoint you want eg trending,search,translate,randomid, gifs by gif id
//   return gf.trending({ offset, limit: 10 })
// }
// console.log(fetchGifs)
// const trending = async () => {
//   try {
//     const result = await gf.trending();
//     console.log(`trending`, result);
//   } catch (error) {
//     console.error(`trending`, error);
//   }
// };

//const data = async() => await gf.trending({limit:10,offset:25})