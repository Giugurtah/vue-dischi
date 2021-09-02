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
                return this.songList
            } else {
                let filtredArray = this.songList((album) => {
                    checkedGenres.includes(album.genre);
                })
                return filtredArray
            }
        }
    },
    conputed: {
        displayedAlbums: () => {
            if(this.checkedGenres == []) {
                return this.songList
            } else {
                let filtredArray = this.songList((album) => {
                    checkedGenres.includes(album.genre);
                })
                return filtredArray
            }
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