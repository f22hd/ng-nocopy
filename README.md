## ng-nocopy
 A directive that prevents a user from copying a specific element content.
 Also applying no selection rules.

#### how to get started?
install the package.
``` npm i ng-nocopy  ```
import it into your module ( app.module )
``` import {NgNocopyModule} from 'ng-nocopy'; ```
```
@NgModule({
  ...
  imports: [
    NgNocopyModule
  ]
});
```

in your component , you can add the directive on your html element to prevent its content from copying.
``` 
<p noCopy (copyAttempted)='onCopyAttemp()'>your content</p>
```
This directive has copy Attempted event that fires when the user trying to copy the element content. so you can show him an error message :).


#### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.
