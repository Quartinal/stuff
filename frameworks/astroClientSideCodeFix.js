const someClientSideThing = {
    doSomethingClientSide() {
        if (typeof window !== 'undefined') {
            return origin.trim().replace(
                (location.protocol === 'https:' 
                    ? 'https://' 
                    : 'http://'),
                ''
            );
        }
    }
};