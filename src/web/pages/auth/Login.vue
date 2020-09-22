<template>
    <div>
        {{/** NavBar */ }}

        {{/** Container */}}

            {{/** Login Container Centered Box */ }}

                {{/** Login Box */}}

                    {{/** Logo on Box Header */}}

                    {{/** hyperlink to create Account */}}

                        {{/** Form */}}

                            {{/** Form-control for username */}}

                            {{/** Form-control for password */}}

                            {{/** Form-control for checkbox remember password */}}

                            {{/** Button Login */}}

        {{/** Footer */ }}
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