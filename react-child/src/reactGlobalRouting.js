
export default (history) => {
    history.listen((location) => {
        console.log('ReactGlobalListener', location.pathname);
    });
};