class RouterStub {
  navigate(url: string[]) {
    return url;
  }

  params = {
    subscribe: () => {},
  }
}
// /Observable<Data> {}g
export default RouterStub;
