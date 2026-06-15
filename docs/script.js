let ids = 10


function hideAll()
{
    for (let i = 0; i<ids; i++){
        document.getElementById("A" + i).hidden = true
    }
}

function A0()
{
    hideAll()
    document.getElementById("A0").hidden = false
}

function A1()
{
    hideAll()
    document.getElementById("A1").hidden = false
}

function A2()
{
    hideAll()
    document.getElementById("A2").hidden = false
}

function A3()
{
    hideAll()
    document.getElementById("A3").hidden = false
}

function A4()
{
    hideAll()
    document.getElementById("A4").hidden = false
}

function A5()
{
    hideAll()
    document.getElementById("A5").hidden = false
}

function A6()
{
    hideAll()
    document.getElementById("A6").hidden = false
}

function A7()
{
    hideAll()
    document.getElementById("A7").hidden = false
}

function A8()
{
    hideAll()
    document.getElementById("A8").hidden = false
}

function A9()
{
    hideAll()
    document.getElementById("A9").hidden = false
    initEasyChefPrototype()
}

function initEasyChefPrototype()
{
    const phone = document.getElementById("easychefProto")
    if (!phone || phone.dataset.bound === "true") return

    const drawer = document.getElementById("ecDrawer")
    const backdrop = document.getElementById("ecBackdrop")
    const hamburger = document.getElementById("ecHamburgerBtn")
    const fab = document.getElementById("ecFab")
    const allViews = document.querySelectorAll(".ec-view")
    const navButtons = document.querySelectorAll(".ec-bottom-item")

    const openDrawer = () => {
        drawer.classList.add("open")
        backdrop.classList.add("show")
        drawer.setAttribute("aria-hidden", "false")
    }

    const closeDrawer = () => {
        drawer.classList.remove("open")
        backdrop.classList.remove("show")
        drawer.setAttribute("aria-hidden", "true")
    }

    const setView = (viewName) => {
        allViews.forEach((view) => {
            view.classList.toggle("active", view.id === `ecView-${viewName}`)
        })

        navButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.ecView === viewName)
        })
    }

    hamburger.addEventListener("click", () => {
        if (drawer.classList.contains("open")) closeDrawer()
        else openDrawer()
    })

    backdrop.addEventListener("click", closeDrawer)

    fab.addEventListener("click", () => {
        setView("actions")
    })

    document.querySelectorAll(".ec-drawer-item").forEach((btn) => {
        btn.addEventListener("click", () => {
            setView(btn.dataset.ecView)
            closeDrawer()
        })
    })

    document.querySelectorAll(".ec-bottom-item").forEach((btn) => {
        btn.addEventListener("click", () => {
            setView(btn.dataset.ecView)
        })
    })

    document.querySelectorAll(".ec-action-btn, .ec-result, .ec-submit, .ec-post-card, .ec-pill").forEach((el) => {
        el.addEventListener("click", () => {
            const target = el.dataset.ecView
            if (target) setView(target)
        })
    })

    document.querySelectorAll(".ec-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".ec-chip").forEach((c) => c.classList.remove("active"))
            chip.classList.add("active")
        })
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeDrawer()
    })

    phone.dataset.bound = "true"
}

/*
function reveal(A)
{
    hideAll()
    console.log(A)
    document.getElementById(A).hidden = false
}
*/