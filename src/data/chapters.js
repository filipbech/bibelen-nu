import { get, set, keys } from 'idb-keyval';

export const hasAll = () => {
    return new Promise(res => {
        keys().then(allKeys => {
            res(allKeys.length === 1189);
        });
    });
}

export const getAll = () => {
    return Promise.all([1,2,3,4,5,6].map(partNum => {
        return fetch(`/api/part${partNum}.json`)
            .then(res => res.json())
            .then(data => {
                for (let identifier in data) {
                    set(identifier.toLowerCase(), data[identifier]);
                }
            });
        })
    );
}

export const getChapter = (book, chapter) => {
    const identifier = `${book.toLowerCase()}.${chapter}`;
    return new Promise((res, rej) => {
        get(identifier) /* resolves with undefined if not in idb */
            .then(value => {
                if(value) {
                    return res(value);
                }
                fetch(`/api/${identifier}.json`)
                    .then(res => res.json())
                    .then(data => {
                        set(identifier, data.text);
                        res(data.text);
                    })
                    .catch(err=>{
                        rej(err);
                    });
        }); 
    });
}



