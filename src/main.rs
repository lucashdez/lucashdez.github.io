use yew::prelude::*;

#[function_component(AboutMe)]
fn about_me() -> Html
{
	let presentation_card: &str = "Hi. I am Lucas Hernández Abreu.";
    html!(
		<div class="box">
			<div class="aboutme text">
			<h1>{"About Me"}</h1>
			<p> {presentation_card}</p>
			</div>
			</div>
    )
}

#[function_component(Logo)]
fn logo() -> Html {
	let logo_lucas ="
██╗     ██╗   ██╗ ██████╗ █████╗ ███████╗██╗  ██╗██████╗ ███████╗███████╗
██║     ██║   ██║██╔════╝██╔══██╗██╔════╝██║  ██║██╔══██╗██╔════╝╚══███╔╝
██║     ██║   ██║██║     ███████║███████╗███████║██║  ██║█████╗    ███╔╝ 
██║     ██║   ██║██║     ██╔══██║╚════██║██╔══██║██║  ██║██╔══╝   ███╔╝  
███████╗╚██████╔╝╚██████╗██║  ██║███████║██║  ██║██████╔╝███████╗███████╗
╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝
"; 
    html!(
        <div class="logo">
			<pre>{logo_lucas}</pre>
		</div>
    )
}
#[function_component(App)]
fn app() -> Html {
    html!(
        <div class="app">
            <Logo/>
			<AboutMe/>
        </div>
    )
}

fn main() {
    yew::start_app::<App>();
}

//TODO : AAAA
