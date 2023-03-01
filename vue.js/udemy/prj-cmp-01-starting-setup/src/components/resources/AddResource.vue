<template>
    <h2>Aggingi fratmo</h2>


    <Teleport to="body"> 
        <base-dialog v-if="!isValid"
        title="No Input?"
        @close="confirmDialog">
        <template #default>
            <img style="height: 100px;" src="https://i.imgflip.com/65939r.jpg?a466008">
        </template>
        <template #actions>
            <base-button @click="confirmDialog">No input...</base-button>
        </template>
    </base-dialog>
</Teleport>
   

    <base-card>
    <form @submit.prevent="submitData">
        <div class="form-control">
        <label for="title">
            Titolo
        </label>
        <input type="text" id="title" name="title" ref="titleInput">
    </div>
    <div class="form-control">
        <label for="description">
            Er testo
        </label>
        <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
    </div>
    <div class="form-control">
        <label for="link">
            Link
        </label>
        <input type="url" id="link" name="link" ref="linkInput">
    </div>
    <div class="form-control">
        <base-button type="submit" >Aggiungi!</base-button>
    </div>
    </form>
    </base-card>
    

</template>

<script>
export default{
    data() {
        return {
            isValid: true
        }
    },
    inject: ['resources', 'addResource'],
    methods: {
        submitData() {
            console.log("yoo")
            const t = this.$refs.titleInput.value
            const d = this.$refs.descriptionInput.value
            const l = this.$refs.linkInput.value


            if (t.trim() == '' || d.trim() == '', l.trim() == '') {
                this.isValid = false
                return
            }
            this.addResource(t, d, l)
        },
        confirmDialog() {
            this.isValid = true
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>