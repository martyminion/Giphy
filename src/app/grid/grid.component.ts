import { Component, OnInit } from '@angular/core';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from './grid'
import { element } from 'protractor';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  url: string;
  gifs: Gif[] = [
    new Gif("https://media1.giphy.com/media/XdVqLSJXm35YGdecdG/giphy.gif?cid=0ed7a7a150d22d2cbfff1d1bcff3dbbab484b64da5f77037&rid=giphy.gif")
  ]
  newGif = new Gif("")
  ngOnInit(): void {
    this.getTrending()

  }
  getTrending() {
    const gf = new GiphyFetch('kp565aEitjQhd24gmHi5vTqIwxWB81iU')
    async function getgif() {
      let data = await gf.trending({ limit: 10, offset: 25 });
      let urlarray = [];
      //console.log(data.data[0].images.downsized_large.url)
      for (let i = 0; i < 10; i++) {
        let gifurls = data.data[i].images.downsized_large.url
        urlarray.push(gifurls)
        //console.log(gifurls)
      }
      console.log(urlarray)
    }
    getgif()
    
  }
}

// 


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

     //const data = async() => await gf.trending({limit:10,offset:25}); 