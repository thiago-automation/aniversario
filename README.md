# Convite de Aniversário - Miria 🎉

Convite interativo para o aniversário da Miria usando p5.js

## 📁 Arquivos necessários

- `index.html` - Página principal
- `sketch.js` - Código do convite
- `piano.mp3` - Arquivo de som (você precisa adicionar)

## 🚀 Como colocar no GitHub Pages

### Passo 1: Criar repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Dê um nome ao repositório (ex: `convite-miria`)
5. Marque como **Public**
6. Clique em **"Create repository"**

### Passo 2: Upload dos arquivos

**Opção A - Interface Web (Mais fácil):**

1. No seu repositório, clique em **"uploading an existing file"**
2. Arraste os arquivos: `index.html`, `sketch.js` e `piano.mp3`
3. Clique em **"Commit changes"**

**Opção B - Linha de comando (para quem conhece Git):**

```bash
git clone https://github.com/SEU-USUARIO/convite-miria.git
cd convite-miria
# Copie os 3 arquivos para esta pasta
git add .
git commit -m "Adicionar convite"
git push
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **main** (ou **master**)
4. Clique em **Save**
5. Aguarde alguns minutos

### Passo 4: Acessar o convite

Seu convite estará disponível em:
```
https://SEU-USUARIO.github.io/convite-miria/
```

## 🎵 Sobre o arquivo de som

O código está configurado para tocar `piano.mp3` quando o convite for aberto.

**Onde conseguir um arquivo de som:**

- [Pixabay](https://pixabay.com/music/) - Sons gratuitos
- [Freesound](https://freesound.org/) - Biblioteca de sons
- Grave uma mensagem personalizada no seu celular e converta para MP3

**IMPORTANTE:** 
- O arquivo de som DEVE se chamar `piano.mp3` OU você pode mudar o nome no código
- Para mudar o nome, edite a linha 7 do arquivo `sketch.js`:
  ```javascript
  som = loadSound("piano.mp3"); // ← mude aqui
  ```

## 📱 Compartilhar no WhatsApp

Depois que o site estiver no ar:

1. Copie o link: `https://SEU-USUARIO.github.io/convite-miria/`
2. Abra o WhatsApp
3. Cole o link na conversa
4. Envie! 🎊

O convite funcionará em qualquer celular ou computador!

## ⚠️ Resolução de Problemas

**O som não toca:**
- Verifique se o arquivo `piano.mp3` foi enviado junto
- Alguns navegadores bloqueiam som automático - nesse caso, o usuário precisa clicar no botão

**O site não aparece:**
- Aguarde 5-10 minutos após ativar o GitHub Pages
- Verifique se o arquivo se chama exatamente `index.html`

**Erro 404:**
- Certifique-se de que o repositório é público
- Verifique se o GitHub Pages está ativado em Settings > Pages

## 🎨 Personalização

Quer mudar as cores ou textos? Edite o arquivo `sketch.js`!

---

Feito com ❤️ para o aniversário da Miria
