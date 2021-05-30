class CreateGallery {
   


    get title() {
        return cy.get('input[id="title"]')
    }

    get description() {
        return cy.get('input[id="description"]')
    }

    get imageUrl() {
        return cy.get('input[placeholder="image url"]')
    

    }

    get submmitButtom() {
        return cy.get('form > button:nth-of-type(1)')

        
    }

    get createButton() {
        return cy.get('a[href="/create"]')
    }

    clickcreateButton() {
        this.createButton.click()
    
    }
    
    create(title, description, image_url) {
        this.title.type(title)
        this.description.type(description)
        this.imageUrl.type(image_url)
        //this.addImage.click({multiple : true})
        this.submmitButtom.click()
    }
}

export const createGallery = new CreateGallery()