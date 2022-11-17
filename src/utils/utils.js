export function debounce(cb, delay = 1000) {
        let timeout;

        return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(async() => {
                       let data =await cb(...args)
                       console.log('data: ', data);
                       //TODO? add this data to the place state in zustand
                }, delay);
        };
}
