
export default (history) => {
    const unsubscribe = history.listen((location) => {
        console.log('ReactGlobalListener', location.pathname);
    });
};