<template>
    <div>
        Login Pages
    </div>
</template>

<script>
export default {
    
    mounted(){
        /** Add External Resources */
        let login_js = document.createElement('script')
        login_js.setAttribute('src','js/auth/login.js')

        document.body.appendChild(login_js)
    }

}
</script>