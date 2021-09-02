var app = new Vue({
    el: '#app',
    data: {
        songList: [],
        genreList: [],
        checkedGenres: [],
    },
    methods: {
        printedAlbums() {
            if(this.checkedGenres == []) {
                console.log(this.songList);
                return this.songList
            } else {
                let filtredArray = this.songList.filter((album) => {
                    this.checkedGenres.includes(album.genre);
                })
                console.log(this.songList);
                return filtredArray
            }
        }
    },
    computed: {
        displayedAlbums() {
            if(this.checkedGenres.length == 0)
                return this.songList;

            return filteredAlbum = this.songList.filter((album) => this.checkedGenres.includes(album.genre));
        }
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((res) => { 
            res.data.response.forEach((song) => {
                if (!this.genreList.includes(song.genre)) {
                    this.genreList.push(song.genre);
                }
            })
            this.songList = res.data.response;
        })
    }
})