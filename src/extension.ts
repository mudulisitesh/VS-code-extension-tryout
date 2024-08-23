import * as vscode from 'vscode';

function getMemeUrl(errorCount: number): string {
    if (errorCount === 0) {
        return 'C:\Users\mudul\OneDrive\Desktop\VS-code-project\sk\src\Src Pic\truly-has-anyone-ever-tried-to-actually-sleep-while-cuddling-v0-1xb17aoh9dkd1.webp';
    } else if (errorCount < 5) {
        return 'src\Src Pic\truly-has-anyone-ever-tried-to-actually-sleep-while-cuddling-v0-1xb17aoh9dkd1.webp';
    } else if (errorCount < 10) {
        return 'src\Src Pic\truly-has-anyone-ever-tried-to-actually-sleep-while-cuddling-v0-1xb17aoh9dkd1.webp';
    } else {
        return 'src\Src Pic\truly-has-anyone-ever-tried-to-actually-sleep-while-cuddling-v0-1xb17aoh9dkd1.webp';
    }
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.generateMeme', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const diagnostics = vscode.languages.getDiagnostics(document.uri);
            const errorCount = diagnostics.filter(diagnostic => diagnostic.severity === vscode.DiagnosticSeverity.Error).length;
            const memeUrl = getMemeUrl(errorCount);

            const panel = vscode.window.createWebviewPanel(
                'memeGenerator',
                'Your Meme',
                vscode.ViewColumn.One,
                {}
            );

            panel.webview.html = `
                <!DOCTYPE html>
                <html lang="en">
                <body>
                    <img src="${memeUrl}" width="100%" />
                </body>
                </html>
            `;
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
