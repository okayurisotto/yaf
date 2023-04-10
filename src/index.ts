import * as vscode from "vscode";

class DocumentFormattingEditProvider
  implements vscode.DocumentFormattingEditProvider
{
  provideDocumentFormattingEdits() {
    return [];
  }
}

export const activate = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "*",
      new DocumentFormattingEditProvider(),
    ),
  );
};
