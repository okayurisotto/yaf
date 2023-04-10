import * as vscode from "vscode";

class DocumentFormattingEditProvider
  implements vscode.DocumentFormattingEditProvider
{
  provideDocumentFormattingEdits() {
    return [];
  }
}

class DocumentRangeFormattingEditProvider
  implements vscode.DocumentRangeFormattingEditProvider
{
  provideDocumentRangeFormattingEdits() {
    return [];
  }
}

export const activate = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "*",
      new DocumentFormattingEditProvider(),
    ),
    vscode.languages.registerDocumentRangeFormattingEditProvider(
      "*",
      new DocumentRangeFormattingEditProvider(),
    ),
  );
};
