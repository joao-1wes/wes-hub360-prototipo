# Abrir o dashboard no navegador

## Se a depuração (F5) ainda der “Unable to attach to browser”

1. **Feche todas as janelas do Edge** (incluindo em segundo plano).
2. Use a configuração **“Edge + localhost (depurar)”** — ela usa o adaptador **Chrome** com o executável do **Edge** (mais estável no Cursor que `type: msedge`).
3. Se não abrir, teste **“Edge x86 + localhost”** (caminho alternativo do Edge no Windows).
4. Se tiver **Google Chrome** instalado, use **“Google Chrome + localhost”**.

## Sem depurador (só ver a página)

1. `Terminal` → `Run Task…` → **Servidor estático (porta 5500)** (deixe rodando).
2. Depois: **Run Task…** → **Abrir dashboard no navegador (sem depurar)**.

Ou no terminal, na pasta do projeto:

```bash
python -m http.server 5500 --bind 127.0.0.1
```

E abra manualmente: <http://127.0.0.1:5500/index.html>

## Python não encontrado

Instale Python ou use, no terminal:

```bash
npx --yes serve . -l 5500
```

Depois abra <http://127.0.0.1:5500/index.html> (ajuste a config `url` no `launch.json` se mudar a porta).

## Caminho do projeto diferente

Se a pasta não for `C:\sistemas_wes\history\dashboard-static`, edite a URL **“Edge + arquivo index.html”** no `launch.json` para o seu `file:///.../index.html`.
