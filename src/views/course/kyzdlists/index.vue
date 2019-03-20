<template>
<div style="position:relative;">
  <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div  style="background-color: #fff;
    width: 100%;
    padding-bottom: 0.5%;
    padding-left: 0.5%;
　　 padding-top: 0.5%;">

        <div style=" width: 47%;  height: 30%  padding-bottom: 31%;border: 1% solid #fff;  background-color: #fff;float: left;margin: 1%;" v-for="(item,index) in lists" :key="index">
            <router-link  :to="'/course/hindex?data='+item.proid" class='panel-content'>
              <img v-bind:src='item.sImgURL' alt srcset style="max-width:100%;border-radius: 3%;">
           </router-link>
        </div>

    </div>
  </section>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import {
  getKYZDList
} from '@/api/lession'
export default {
  name: 'kyzdlists',
  created() {
    this.showTtl="科研指导"
    this.kyzd();

  },
  data() {
    return {
      showDrop: false,
      showU: true,
      showBack: true,
      showTtl: '',
      lists: [],
      proType:"",
    }
  },
  components: {
    HeaderTop
  },
  mounted() {
  },
  methods: {
    async kyzd() {
      let ret = await getKYZDList({})
      if (ret && ret.flag) {
        this.lists = ret.data.lists
        console.log(this.lists)
      }
    }
  }
}
</script>
