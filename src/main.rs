use yew::prelude::*;

#[function_component(Consumer)]
fn consumer() -> Html
{
    html!(
        <div class="consumer">
            {"CONSUMER"}
        </div>
    )
}

#[function_component(Vendor)]
fn vendor() -> Html
{
    html!(
        <div class="vendor">
            {"VENDOR"}
        </div>
    )
}
#[function_component(App)]
fn app() -> Html
{
    html!(
        <div class="app">
            <Consumer/>
            <Vendor/>
        </div>
    )
}

fn main()
{
    yew::start_app::<App>();
}

//TODO : AAAA
