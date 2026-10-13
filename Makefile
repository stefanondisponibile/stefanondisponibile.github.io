.PHONY: setup dev

# One-time project setup. Safe to re-run: only reinstalls when the lockfile changes.
setup: node_modules

node_modules: package-lock.json
	@command -v npm >/dev/null || { echo "npm not found: install Node.js LTS first" >&2; exit 1; }
	npm ci
	@touch node_modules

dev: setup
	npm run dev
