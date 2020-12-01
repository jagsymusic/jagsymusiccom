import {v4 as uuidv4} from "uuid";

function myTracks() {
    return [
        {
            name: "Left My Heart In Pain",
            cover: "https://linkstorage.linkfire.com/medialinks/images/cfd2d124-487a-4149-a6d5-9c91aaabc728/artwork-440x440.jpg",
            id: uuidv4()
        },
        {
            name: "All My Love",
            cover: "https://linkstorage.linkfire.com/medialinks/images/9a7d91bc-00cc-4904-b394-9ab940269d1e/artwork-440x440.jpg",
            id: uuidv4()
        }
    ]
}

export default myTracks;