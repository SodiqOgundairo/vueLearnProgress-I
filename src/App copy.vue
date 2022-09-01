<template>
  <div class="container mt-55">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Vue JS" class="text-white bg-dark h1 p-2 rounded-2" />

    <ApiCall />

    <ApiPost/>
    <ApiConfirmPwd/>
    <router-view />
    <Home />

    <!-- <Routing /> -->
    <Watchers />
    <Slots> <h1>Lamba</h1> </Slots>
    <Slots> 
      <h1>
        Can Also be used to pass anything at all. So great
        </h1> 
    </Slots>

    <MultipleSlots/>

    <MultipleSlots> 
      <template v-slot:header>
      <h1>Lamba</h1>
      </template>

      <template v-slot:main> 
      <p>Multiple Slots at Work</p>
      </template>

      <template v-slot:footer> 
      <button class="btn btn-lg-outline btn-info fw-bold"> Button</button>
      </template>

    </MultipleSlots>

    <DynamicComponents />
    <Computed />
    <NonProps />
    <Ref />
    <FormSubmit />
    <Away />
    <Twoway />
    <Forms />
    <Conditions />
    <Loop />
    <HtmlBinding />
    <ClassBinding />
    <Props />
    <StudentsProps />
    <TeacherProps />
    <TeleportHeader />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import Away from "./components/Away.vue";
import Twoway from "./components/Twoway.vue";
import Forms from "./components/Forms.vue";
import Conditions from "./components/Conditions.vue";
import Loop from "./components/Loop.vue";
import HtmlBinding from "./components/HtmlBinding.vue";
import ClassBinding from "./components/ClassBinding.vue";
import Props from "./components/Props.vue";
import StudentsProps from "./components/StudentsProps.vue";
import TeacherProps from "./components/TeacherProps.vue";
import Ref from "./components/Ref.vue";
import FormSubmit from "./components/FormSubmit.vue";
import NonProps from "./components/NonProps.vue";
import Computed from "./components/Computed.vue";
import Watchers from "./components/Watchers.vue";
import Slots from "./components/Slots.vue";
import MultipleSlots from '@/components/MultipleSlots.vue';
import DynamicComponents from './components/DynamicComponents.vue';
import TeleportHeader from './components/TeleportHeader.vue';
import ApiCall from './components/ApiCall.vue';
import ApiPost from './components/ApiPost.vue';
import ApiConfirmPwd from './components/ApiLogIn.vue';
// import Routing from './components/Routing.vue';

export default {
  name: "App",

  components: {
    HelloWorld,
    Home,
    Away,
    Twoway,
    Forms,
    Conditions,
    Loop,
    HtmlBinding,
    ClassBinding,
    Props,
    StudentsProps,
    TeacherProps,
    Ref,
    FormSubmit,
    NonProps,
    Computed,
    Watchers,
    Slots,
    MultipleSlots,
    DynamicComponents,
    TeleportHeader,
    ApiCall,
    ApiPost,
    ApiConfirmPwd,
    // Routing,
  },
};
</script>

<style>
.mt-55 {
  margin-top: 150px;
}
</style>
