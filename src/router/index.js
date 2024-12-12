import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@/views/page1.vue'
import Page2 from '@/views/Page2.vue'
import Page3 from '@/views/Page3.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'page1',
    
    },

    { path:"/page1",
      name:"page1",
      component: Page1
      
    },
    { path:"/page2",
      name:"page2",
      component: Page2

    },

    { path:"/page3",
      name:"page3",
      component: Page3

    },
    // { path:"/Page_section1",
    //   name:"Page_section1",
    //   component: Page_section1

    // },

  ],
})

export default router
