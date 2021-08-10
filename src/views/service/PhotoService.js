import axios from 'axios'

var photos = [
        {"itemImageSrc": "images/galleria/galleria1.jpg","thumbnailImageSrc": "g","alt": "Description for Image 1","title": "Title 1"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 2","title": "Title 2"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 3","title": "Title 3"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 4","title": "Title 4"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 5","title": "Title 5"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 6","title": "Title 6"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 7","title": "Title 7"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 8","title": "Title 8"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 9","title": "Title 9"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 10","title": "Title 10"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 11","title": "Title 11"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 12","title": "Title 12"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 13","title": "Title 13"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 14","title": "Title 14"},
        {"itemImageSrc": "https://i.imgur.com/KIPtISY.jpg","thumbnailImageSrc": "https://i.imgur.com/KIPtISY.jpg","alt": "Description for Image 15","title": "Title 15"}
    ]


export default class PhotoService {

    getImages() {
        return photos
    }
}