import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
<<<<<<< HEAD
import MyProfile from "./views/MyProfile.vue";
=======
import ToDos from "./views/ToDos.vue";
>>>>>>> gina

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
<<<<<<< HEAD
      path: "/editorder",
      name: "editorder",
      component: () => import("./views/AdminEditOrder.vue")
    },
    {
      path: "/editproduct",
      name: "editproduct",
      component: () => import("./views/AdminEditProduct.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./views/Cart.vue")
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("./views/Checkout.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/employeemanagement",
      name: "employeemanagement",
      component: () => import("./views/EmployeeManagement.vue")
    },
    {
      path: "/itempage",
      name: "itempage",
      component: () => import("./views/ItemPage.vue")
    },
    {
      path: "/orderconfirmation",
      name: "orderconfirmation",
      component: () => import("./views/OrderConfirmation.vue")
    },
    {
      path: "/ordertracking",
      name: "ordertracking",
      component: () => import("./views/OrderTracking.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("./views/Shop.vue")
    },
    {
      path: "/vieworder",
      name: "vieworder",
      component: () => import("./views/ViewOrder.vue")
    },
    {
      path: "/my-profile",
      name: "myProfile",
      component: MyProfile
=======
      path: "/todos",
      name:"todos",
      component: ToDos
>>>>>>> gina
    }
  ]
});
