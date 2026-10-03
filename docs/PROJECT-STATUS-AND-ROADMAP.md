# Maine Roofing Scapes & Repairs — Project Status & Technical Roadmap

**Operador:** EverGreen MKT  
**Repositório:** `EverGreen-Agency/maineroofing-wesite`  
**Domínio Canônico:** `https://www.maineroofingscapesrepairs.com`  
**Telefone Canônico de Rastreamento:** `+1 (207) 383-1646`  
**Última Atualização:** Outubro de 2026  

---

## 1. Estado Atual das Branches & Deploy (Vercel)

| Branch | Status no GitHub | Conteúdo / Responsabilidade | Ambiente Vercel |
| :--- | :--- | :--- | :--- |
| **`main`** | Atualizada (`origin/main`) | **Produção Ativa:** Contém toda a infraestrutura estável, os 9 artigos da Fase 1, correção do tracking com fallbacks nativos (`GTM-TH5DS4QJ`, `G-GRG6KCYJTR`, `ygbhburnl0`) e filtro para disparar analytics **apenas** no domínio canônico de produção. | `https://www.maineroofingscapesrepairs.com` |
| **`develop`** | Atualizada (`origin/develop`) | **Staging / Homologação:** Contém o **Artigo 10** (*Commercial Roof Winterization Checklist*), nova imagem hero fotorrealista de alta resolução e refinamento visual do Header (menu com "Blog" em uma única linha e top-bar limpa sem duplicação de telefone). Analytics desativado em previews para dados 100% limpos. | URL de Preview temporária Vercel (com `X-Robots-Tag: noindex`) |

---

## 2. Conteúdos Publicados & Fase 2 em Andamento

### Fase 1 (100% Concluída na `main`):
1. `/blog/section-179-commercial-roof-replacement-tax-deduction-maine` (Comercial / $100)
2. `/blog/commercial-roof-snow-load-calculator-maine` (Comercial / $100)
3. `/blog/how-long-do-roof-shingles-last-in-maine` (Residencial / $50)
4. `/blog/brown-water-stain-ceiling-after-snow-maine` (Emergência / $50)
5. `/blog/commercial-roof-restoration-vs-replacement` (Comercial / $100)
6. `/blog/emergency-roof-repair-storm-damage-maine` (Emergência / $50)
7. `/blog/how-to-choose-roofing-contractor-maine` (Residencial / $50)
8. `/blog/ice-dam-prevention-removal-maine` (Inverno / $50)
9. `/blog/standing-seam-metal-roof-cost-maine` (Residencial Premium / $50)

### Fase 2 (Implementada na branch `develop`):
- **Artigo 10:** `/blog/commercial-roof-winterization-checklist-maine` (Gestores comerciais, tabelas de neve, FAQ Schema)
- **Artigo 11:** `/blog/heating-cables-snow-guards-maine` (Proteção costeira, cabos autoreguláveis vs fitas baratas, snow guards)
- **Artigo 12:** `/blog/freeze-thaw-roof-leaks-maine` (Física dos vazamentos em janeiro/fevereiro, dilatação térmica, condensação no sótão)
- **Página Local Portland, ME:** `/service-areas/portland-me` (Schema `RoofingContractor`, coordenadas geográficas, Slider Antes/Depois)
- **Página Local Lewiston & Auburn, ME:** `/service-areas/lewiston-auburn-me` (Indústria, moinhos históricos, 65+ PSF carga de neve inland)
- **Módulo Interativo:** `BeforeAfterSlider.tsx` na Home e nas páginas locais.
- **Próximas Expansões:**
  - Artigo 13: *How to Safely Remove 3 Feet of Heavy Wet Snow from a Flat Commercial Roof in Maine*
  - Página Local Bangor, ME (`/service-areas/bangor-me`)

---

## 3. Roteiro de Configuração de Dados & Analytics (Próxima Sessão)

### A. Google Search Console ➔ Google BigQuery (Bulk Data Export)
- **Objetivo:** Armazenamento perpétuo e sem perda de histórico de todas as consultas, posições, impressões e cliques do Google.
- **Passos para Ativação:**
  1. Acessar o Google Cloud Platform da EverGreen (`console.cloud.google.com`).
  2. Criar ou selecionar o projeto `evergreen-maine-roofing`.
  3. No Search Console (*Configurações > Exportação de dados em massa*), inserir o Project ID do BigQuery.
  4. Escolher a localização do conjunto de dados (`US` multi-region).
  5. Validar a primeira exportação diária nas tabelas `searchconsole.searchdata_site_impression` e `searchconsole.searchdata_url_impression`.

### B. Looker Studio (Dashboard Automatizado MoM / YoY)
- Conectar o conector nativo do Google Search Console e do Google Analytics 4.
- Métricas a exibir para a equipe interna da EG:
  - Total de Cliques Orgânicos vs Impressões no Maine e NH.
  - Posição Média das palavras-chave comerciais (ex: "commercial roofing maine", "ice dam removal").
  - Contagem do evento `click_phone` (ligações para `(207) 383-1646`) e `generate_lead` (envios de formulário de $100/$50).

### C. Parâmetros de Rastreamento & Proteção de Dados
- **Produção:** GTM (`GTM-TH5DS4QJ`), GA4 (`G-GRG6KCYJTR`) e Clarity (`ygbhburnl0`) rodam exclusivamente em `www.maineroofingscapesrepairs.com` e `maineroofingscapesrepairs.com`.
- **Staging / Preview:** Scripts desativados e `dataLayer.push` ignorado para garantir integridade analítica.

---

## 4. Auditoria de SEO & GEO — Próximos Saltos de Otimização

1. **Google Business Profile (GBP) Local Signals:**
   - Estimular avaliações de clientes locais mencionando serviços e cidades específicas do Maine para impulsionar o Google Local Pack (Mapas).
2. **Páginas de Cidades (Programmatic SEO Local):**
   - Criação de clusters locais estruturados: `/commercial-roofing/portland-me`, `/roof-repair/lewiston-me`, `/ice-dam-removal/bangor-me`.
3. **Módulo Interativo Antes & Depois (Before/After):**
   - Implementação de slider visual comparativo de obras reais de restauração com silicone e standing seam metal.
