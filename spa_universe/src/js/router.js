export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(e) {
    e = e || window.event;
    e.preventDefault();
    window.history.pushState({}, '', e.target.href);
    console.log(e.target.id);
    document.querySelector('#nav-home').classList.remove('active');
    document.querySelector('#nav-explore').classList.remove('active');
    document.querySelector('#nav-universe').classList.remove('active');
    document.querySelector(`#${e.target.id}`).classList.add('active');
    this.handle();
  }

  handle() {
    console.log(window.location.pathname);
    const pathname = window.location.pathname;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => {
        return data.text();
      })
      .then((html) => {
        console.log(html);
        document.querySelector('.app').innerHTML = html;
      });
  }
}
