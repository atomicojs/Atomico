<img src="brand/logo.png" width="280px"/>
<br/>

A small library to create web-components based on JSX, [See Installation](#Installation).


```js
import { h, Element } from "atomico";

customElements.define(
    "my-tag",
    class extends Element {
        render() {
            return (
                <host
                    click={() => {
                        this.setState({
                            toggle: !this.state.toggle
                        });
                    }}
                >
                    {this.state.toggle ? "🚀" : "🔥"}
                </host>
            );
        }
    }
);
```
## Atomico ❤️ JSX

If you are looking to work with Atomico, you have previously commented on interesting elements of Atomico's virtual-dom.

### Property as events

If a property of the tag has been defined as a function, it will be registered as an event.

```js
render(){
  return <button click={this.handlerClick}>🤷</button>
}
```
> This is useful if you want to work with custom-events, since Atomico does not change in the name of the event.

### Tag Slot

The tag `<slot name ="any"/>`, allows you to interact with real nodes, by default Atomico obtains the slot when mount the component.

```html
<my-tag>
    <img slot="image"/>
</my-tag>
```
You can interact with these slot through virtual-dom
```js
render(){
  return <slot name="image" src="my-image.jpg" click={this.handlerClick}/>
}
```
>The interaction of Atomico is only limited to the definition of properties.

### Tag host

The `<host/>` tag represents the same component, this is useful for manipulating the state of the root label.

```js
render(){
  return <host style={{background:"black",color:"white",display:"block"}}>
      {this.is}
  </host>
}
```

### Additional remarks

The Virtual-dom of Atomico does not support:

1. **ref** : Ud puede usar `this.content.querySelector("selector")`, para lograr un efecto similar.
2. **key** : Aunque algunos consideran una buena práctica el uso de key en el manejo de listas, como autor de Atomico no las considero de uso frecuente como para brindarle soporte dentro de Atomico.
3. **fragmentos**:`</>` Ud no necesitara usar fragmentos ya que el web-componente es y sera siempre su raiz.


1. **ref**: You can use `this.content.querySelector("selector")`, to achieve a similar effect.
2. **key**: Although some consider it a good practice to use key in list management, as the author of Atomico, I do not consider them to be of frequent use to provide support within Atomico.
3. **fragments**: `</>` You will not need to use fragments since the web-component is and will always be its root.

## Lifecycle


| Method | Execution | Observation |
|:-------|:----------|:----|
| constructor | -- | Useful for defining an initial state |
| onMounted | after the first render | Useful for the realization of asynchronous calls or subscription of events |
| onUpdate(props:Object) | Each time a property associated with `static get props` is modified | If this method returns `false` it prevents rendering |
| onUpdated | After the render execution | It is recommended to analyze the state of the dom, after each update |
| onUnmounted | After the component has been removed from the document | Useful for the elimination of global events |

## Shadow dom

By default Atomico works on the shadow-dom whenever you enable it.

```js
constructor(){
  this.attachShadow({mode:"open"});
}
```

## setAttribute

Atomico captures the use of setAttribute, associated with the component, to send the update object to `setProperties`, only if the index matches a property of` static get props`

```js
document.querySelector("my-tag").setAttribute("my-prop",{});
```
The biggest advantage of using `setAttribute` is the transfer in **raw** of the value associated with the property.

## Installation

### Instalacion de bone-cli
Initialize a structure to start with Atomic
```js
npm install -g cli-bone
```
### Create component
Download from github, the skeleton to start with Atomico

```js
bone uppercod/Atomico.template
```
### yarn or npm install
The previous command will generate a folder, enter it and install the dependencies.

### script

It allows the generation of the bundle that groups the component, to visualize the component just open `ìndex.html` in the component directory.

```sh
# watch
npm run watch
# build
npm run build
# publish
npm publish
```

The component generated with `uppercod/atomico.template`, has the configuration to be shared in **npm** or **github**, remember to review `package.json` before publishing.