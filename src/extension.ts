// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, My extension "helloworld" is now active!');

  //-------------------------- Command 1
  // The command has been defined in the package.json file in a 'commands' key --=>>  "command": "helloworld.showHelloWorld"
  // The activator extension trigger has been defined in the package.json file in a 'activationEvents' key --==>> "onCommand:helloworld.showHelloWorld",
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // This function is sometimes also called "command handler".
  // This function will show a message on the bottom-right-hand side.
  let disposable1 = vscode.commands.registerCommand(
    "helloworld.showHelloWorld", //unique identifier.
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("My First command: showHelloWorld");
    }
  );

  //-------------------------- Command 2
  // The command has been defined in the package.json file in a 'commands' key --=>>  "command": "helloworld.openFileDialog"
  // The activator extension trigger has been defined in the package.json file in a 'activationEvents' key --==>> "onCommand:helloworld.openFileDialog",
  // This function will open a select file dialog on the screen.
  let disposable2 = vscode.commands.registerCommand(
    "helloworld.openFileDialog", //unique identifier.
    () => {
      // some configurations for an open file dialog
      const options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        openLabel: "Open",
        filters: {
          "Text files": ["txt"],
          "All files": ["*"],
        },
      };

      vscode.window.showOpenDialog(options).then((fileUri) => {
        //Check if the file is selected.
        if (fileUri && fileUri[0]) {
          // show selected file's name in the console
          console.log("Selected file: " + fileUri[0].fsPath);
        }
      });
    }
  );

  //register commands in the context
  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
}

/*
	This method is called when your extension is deactivated.
	Note: An extension must export an activate() function from its main module and it will be invoked only once by
	VS Code when any of the specified activation events is emitted. Also, an extension should export a deactivate()
	function from its main module to perform cleanup tasks on VS Code shutdown.
 */
export function deactivate() {}

/*
	Tip:
	The VS Code uses <publisher>.<name> as a unique ID for the extension in the package.json file.
	For example, the Hello World sample has the ID 'ht-vscode-samples.helloworld'. VS Code uses the ID to uniquely identify your extension.
*/
