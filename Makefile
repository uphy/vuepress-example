PACKAGE_OS := linux darwin windows
PACKAGE_ARCH := amd64 386

build:
	cd hello && \
	go build .

package: clean
	cd hello && \
	go get github.com/mitchellh/gox && \
	mkdir -p ../build && \
	gox -os="$(PACKAGE_OS)" -arch="$(PACKAGE_ARCH)" -output="../build/{{.Dir}}_{{.OS}}_{{.Arch}}/{{.Dir}}" && \
	cd .. && \
	mkdir -p dist && \
	ls -1 build | xargs -I% tar zcf "dist/%.tar.gz" -C build "%"

clean:
	rm -rf build dist
