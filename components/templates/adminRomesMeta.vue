<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Input
                    :value = 'data.icon'
                    :action = 'action' 
                    :title = '"Icon"' 
                    :action_key = '"icon"'
                    />
                <MM_Rating
                        :value = 'data.rating'
                        :action = 'action'
                        :title = '"Rating"'
                        :action_key = '"rating"'
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '../lib/MM_Multiple_Input_Text'
    import MM_Input from '../lib/MM_Input'
    import MM_Rating from '../lib/MM_Rating'
    import MM_Multiple_Input from '../lib/MM_Multiple_Input'
    import MM_Checkbox from '../lib/MM_Checkbox'
    export default {
        name: "romesMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Rating, MM_Multiple_Input, MM_Checkbox},
        data() {
            return {}
        }
    }
</script>